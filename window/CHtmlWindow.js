Loong.CHtmlWindow = ( function( _BaseClass )
{
    function CHtmlWindow( pDocument )
    {
        var pBody = pDocument.body;
        pBody.style.margin = 0;
        var pCanvas = pDocument.createElement( "canvas" );
        pBody.appendChild( pCanvas );
        var pStyle = pCanvas.style;
        pStyle.width = "100%";
        pStyle.height = "100%";
        _BaseClass.call( this, pBody.clientWidth, pBody.clientHeight );

        var This = this;
        pBody.onresize = function()
        {
            var Width = pBody.clientWidth;
            var Height = pBody.clientHeight;
            This.OnWindowResize( Width, Height );
        };

        this.m_Canvas = pCanvas;
        this.m_Content = pCanvas.getContext( "webgl" );
    }

    Loong.EngineClass( "CHtmlWindow", CHtmlWindow, _BaseClass );
    var __proto = CHtmlWindow.prototype;

    __proto.GetContent = function()
    {
        return this.m_Content;
    }

    return CHtmlWindow;
} )( Loong.CWindow );