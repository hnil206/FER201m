<script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
<script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
<script>
    $(document).ready(function () {
        $("#mycarousel").carousel({ interval: 2000 });
        $("#carousel-pause").click(function () {
            $("#mycarousel").carousel("pause");
        });
        $("#carousel-play").click(function () {
            $("#mycarousel").carousel("cycle");
        });
    });
</script>