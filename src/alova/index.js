import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import VueHook from 'alova/vue'

export const alovaInstance = createAlova({
    baseURL: '',
    statesHook: VueHook,
    beforeRequest() { },
    responded: {
        onSuccess: async (response, method) => {
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            return json;
        },
        onError: (error, method) => {
            alert(error.message);
        },
        onComplete: async method => { }
    },
    requestAdapter: adapterFetch(),
});