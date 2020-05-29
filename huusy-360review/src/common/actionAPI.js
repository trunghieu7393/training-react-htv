import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../redux/actions/testSagas';
import DanhGiaMentor from '../Components/DanhGiaMentor';
export const putDatabase = (curentUrl) => {
    let inf = {
        url: curentUrl,
        method: 'put',
        data: 'content'
    }
    axios(inf).then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
            console.log(error);
        });
}
export const deleteDatabase = (curentUrl) => {
    axios.delete(curentUrl)
        .then(response => {
            console.log(response)

        })
        .catch(err => console.log(err));
}

export const postDatabase = (curentUrl) => {

    axios.post(curentUrl, {
        nguoidanhgia: `huusy`,
        nguoiduocdanhgia: `trandat`,
        thoihan: `trang`
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// export const getDatabase = (curentUrl) => {
//     // axios.get(curentUrl)
//     //     .then(response => {
//     //         console.log(response)

//     //         // this.setState({ data: response.data });
//     //     })
//     //     .catch(err => console.log(err));

//     axios({
//         method:'GET',
//         url:'http://localhost:3001/users',
//         data:null
//     }).then(res=>{
//         console.log(res);

//     }).catch(err=>{
//         console.log(err)
//     })


//     }
// export async function getDatabase(){
//     const data=await axios.get('http://localhost:3001/users')
//       .then(function (response) {
//     //response là biến chứa toàn bộ thông tin user
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     return data;
//   }
export const getDatabase = async () => {
    const data = await axios.get('http://localhost:3001/users')
        .then(function (res) {
            //response là biến chứa toàn bộ thông tin user
            console.log(res);
            return PATTERN_DATA(res)
        })
        .catch(function (err) {

            

            console.log(err);
            throw Error('loi ke cha tao')
        });
    return data;

};

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
};

const PATTERN_DATA = (res) => {
    return {
        status: res.status || 404,
        data: res.data,
        error: res.error || null,
    }
}

