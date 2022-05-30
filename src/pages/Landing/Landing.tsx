import React, {Suspense, useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import Result from "../../components/Result/Result";
import {SearchResultProps} from "../../types/showProps";
import {useLocation} from "react-router-dom";

interface propState{
  redirectSearchValue?: string
}

const Landing = () => {
  const location = useLocation();
  let { redirectSearchValue } = {...location?.state as propState};
  const [searchValue, setSearchValue] = useState<string>(redirectSearchValue || '')
  const {data, error} = useFetch<SearchResultProps[]>(`https://api.tvmaze.com/search/shows?q=${searchValue}`);
  const updateSearchValue = (val: string):void => {
    setSearchValue(val)
  }
  return (
    <Suspense fallback={<Loading/>}>
      <Navbar searchValue={searchValue} updateSearchValue={updateSearchValue} />
      <div className="landing-page">
        {/*TODO: error handling!*/}
        <div className="movieList">
          {data?.map((result, index) => <Result key={index} score={result.score} show={result.show}/>)}
        </div>
      </div>
    </Suspense>
  );
}

export default Landing