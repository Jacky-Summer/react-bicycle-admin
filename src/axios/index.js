import Jsonp from 'jsonp'
import axios from 'axios'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            } , function(err, response) {
                resolve(err)
            })
        })
    }

    static ajax(options) {
        let loading;
        if(options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        let baseApi = 'https://www.fastmock.site/mock/87bc6653c04426c45c9a591b0a2429e3/bicycle';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                data: options.data,
                timeout: 5000
            }).then(response => {
                if(options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if(response.status === 200) {
                    let res = response.data
                    if(res.code === 0) {
                        resolve(res)
                    }

                }
            })
        })
    }
}