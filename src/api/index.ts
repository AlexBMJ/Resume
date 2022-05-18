import axios from 'axios';
import type {UserData} from '@/api/user_interface';
import JSON5 from 'json5'

export default {
    init(cb: (d: UserData) => void): void {
        axios.get<string>('/data.json5', {
            params: {
                version: (new Date()).getTime(),
            },
        }).then(({data}) => {
            cb(JSON5.parse(data));
        });
    },
};
