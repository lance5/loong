( function()
{
    Loong.Htmlinit = function()
    {
        var pWindow = new Loong.CHtmlWindow( document );
        var pContent = pWindow.GetContent();
        var pGraphics = pWindow.CreateGraphics();
        var pEngine = 
        {
            m_pMainWindow : pWindow,
            m_pGlContent : pContent,
            m_pGraphics : pGraphics,
        };
        pContent.clearColor( 0.0, 0.0, 0.0, 1.0 );
        pContent.clear( pContent.COLOR_BUFFER_BIT );
        return pEngine;
    };
} )();