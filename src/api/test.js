import request from '@/utils/request'

export default {
    getList() {
        const req = request({
            method: 'get',
            url: '/user/findAll'
        })
        return req
    }
}