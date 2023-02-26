

 $("#add_customer").submit(function(event){
    alert("Data Inserted Succesfully");
});



if(window.location.pathname == "/staff/customer"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/customers/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}

if(window.location.pathname == "/staff/customerHis"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/customerHis/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}

if(window.location.pathname == "/staff/inventory"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/inv/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}

if(window.location.pathname == "/staff/inventoryHistory"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/invHis/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}

if(window.location.pathname == "/staff/transaction"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/trans/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}

if(window.location.pathname == "/staff/tracking"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            'url': `http://localhost:3000/admin/api/truckRoute/${id}`,
            "method":"DELETE",
        }

        if(confirm("Do yo really want to delete this record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Succesfully!")
                location.reload();
            })
        }
    })
}