import React from 'react';
import {act, renderHook, waitFor} from '@testing-library/react';
import useFetch from "../hooks/useFetch";
let mockdata = require('./mockdata.json');

it("should return data after fetch", async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockdata)
    })

    const {result} = renderHook(() => useFetch('test'));
    const currentValue = result.current
    await act(async () => { await waitFor(() => result.current !== currentValue)})

    expect(result.current.data).toEqual(mockdata);
});