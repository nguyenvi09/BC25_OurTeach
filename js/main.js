function getEle(id){
    return document.getElementById(id);
}

//tạo hàm request lên server để lấy danh sách người dùng xuống
function getListProduct(){
    var promise =  axios({
        url: "https://626614c8dbee37aff9abd41e.mockapi.io/api/nguoiDung",
        method: "GET"
    });

    //result sẽ nhận những thứ gì từ server trả về
    promise
        .then(function(result){
            renderHTML(result.data);
        })
        .catch(function(error){
            console.log(error);
        });
};

//tạo hàm renderHTML
function renderHTML(data){
    var content = "";
    for(i = 0; i < data.length; i++){
        if(data[i].loaiND === "GV"){
            content += `
            <div class="col-12 col-lg-6 col-xl-3">
                <div class="card">
                    <img class="card-img-top" src="./images/${data[i].hinhAnh}" />
                    <div class="card-body text-center">
                        <h6 class="card-title">${data[i].ngonNgu}</h6>
                        <h4 class="card-name">${data[i].hoTen}</h4>
                        <p class="card-text">${data[i].moTa}</p>
                    </div>
                </div>
            </div>
            `;
        };
    };
    getEle("teachers-list").innerHTML = content;
};


getListProduct();