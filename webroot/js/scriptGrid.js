
$(document).ready(function () {
    $("#grid").kendoGrid({
        dataSource: {
            type: "json",
            transport: {
                read: "http://localhost/tuto_cakePhp/webroot/js/scriptGrid.json"
            },
            schema: {
                data: "items"
            }
        },
        columns: [
            {
                field: "employee",
                title: "Employee"
            },
            {field: "team",
                title: "Team",
            }
        ]
    })
});
