Loong.CWindow = ( function()
{
    function CWindow( Width, Height )
    {
        this.m_Width = Width;
        this.m_Height = Height;
    }

    Loong.EngineClass( "CWindow", CWindow );
    var __proto = CWindow.prototype;
    
    __proto.OnWindowResize = function( Width, Height )
    {
        this.m_Width = Width;
        this.m_Height = Height;
    }

    __proto.CreateGraphics = function()
    {
        return new Loong.CGraphics( this.GetContent() );
    }

    return CWindow;
} )();