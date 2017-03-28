$(document).ready(function(){
    $("#announce-table #checkall").click(function () {
        if ($("#announce-table #checkall").is(':checked')) {
            $("#announce-table input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#announce-table input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#contact-table #checkall").click(function () {
        if ($("#contact-table #checkall").is(':checked')) {
            $("#contact-table input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#contact-table input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#news-table #checkall").click(function () {
        if ($("#news-table #checkall").is(':checked')) {
            $("#news-table input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#news-table input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#member-table #checkall").click(function () {
        if ($("#member-table #checkall").is(':checked')) {
            $("#member-table input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });

        } else {
            $("#member-table input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });
    
    $("[data-toggle=tooltip]").tooltip();

});

