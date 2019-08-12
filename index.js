//创建编辑器
function changeModel(action, id){
    switch(action){
        case 'editWindow':
            ueditor && destroyEditor();
            now = id;
            $('#' + id).hide();
            var oldContent = $('#' + id).html();
            var tools = window.UEDITOR_CONFIG.toolbars[0];
            tools.splice(6, 1);//删除斜杠 additalic
            tools.splice(5, 1);//删除加框 addbracket
            var temp = id;
            $('#' + temp).prev().append('<script name="courseContent"  type="text/plain"  id="' + temp + '"></script>');
            editType = temp;
            ueditor = UE.getEditor('' + temp + '', {
                initialFrameWidth: 600,
                initialFrameHeight: 200,
                toolbars: [['bold', 'italic', 'underline', '|', 'forecolor', 'fontfamily', 'fontsize' ,'|', 'justifyleft', 'justifycenter', 'justifyright', '|', 'simpleupload', 'insertvideo']]
            });
            ueditor.ready(function(){
                ueditor.setContent(oldContent && oldContent);
            });
            break;
    }
}

//销毁编辑器
function destroyEditor(){
    var editorContent = ueditor.getContent();
    if(!ueditor.isFocus()){
        ueditor.destroy();
        $('#' + editType).remove();
        $('#' + editType).show();
    }
    $("#" + now).html(editorContent);
    if(now == "two"){
        $(".yulanPop_con").html(editorContent);
    }
    ueditor = null;
}