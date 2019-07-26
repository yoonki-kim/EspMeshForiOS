define(["vue", "MINT", "txt!../../pages/tableColor.html", "../../app/js/colorPicker"],
    function(v, MINT,  tableColor ,colorPicker) {

    var TableColor = v.extend({

        template: tableColor,

        data: function(){
            return {
                tableFlag: false,
                tableAllcolorId: "table-all-color-id",
                tableAlltemperatureId: "table-all-temperature-id",
                operateType: "table",
                tableMacs: [],
            }
        },
        methods:{
            show: function() {
                var self = this;
                window.onBackPressed = self.hide;
                self.getTableMacs();
                setTimeout(function () {
                    self.$refs.tableColor.show();
                })
                self.tableFlag = true;
            },
            hide: function () {
                this.tableFlag = false;
                this.$emit("tableColorShow");
            },
            getTableMacs: function() {
                var docs = $("td.active .td-content"), macs = [];
                for (var i = 0; i < docs.length; i++) {
                    var mac = $(docs[i]).attr("data-id");
                    macs.push(mac);
                }
                this.tableMacs = macs;
            },
            _isEmpty: function (str) {
                if (str === "" || str === null || str === undefined ) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        components: {
            "v-colorPicker": colorPicker
        }


    });
    return TableColor;
});