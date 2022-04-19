import { api } from "./services/api.mjs";

const getDataPost = async () => {
    const detailPost = await api.getDataPostId(1);
    let dataComments = [];

    if (detailPost.hasOwnProperty("id")) {

        dataComments = await api.getDataCommentByIdPost(detailPost.id);

    }
    // console.log(detailPost)
    // console.log(dataComments)
}

api.getDataPostId(1)
    .then(function (data) {
        if (data.hasOwnProperty('id')) {
            return api.getDataCommentByIdPost(data.id);

        }
    })
    .then(data => {
        console.log(data)
    })




// getDataPost();
