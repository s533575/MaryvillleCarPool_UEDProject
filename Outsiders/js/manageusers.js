var id;
function openModal(listid){
    id = listid;
    $('#confirmModal').modal('show');
}

function openModal2(){
    $('#confirmModal').modal('hide');
    $("#"+id).hide();
    $('#myModal').modal('show');
}

