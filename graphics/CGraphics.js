Loong.CGraphics = ( function( _BaseClass )
{
    function CGraphics( Content )
    {
        this.m_Content = Content;
        this.m_ShaderProgram = {};
    }

    Loong.EngineClass( "CGraphics", CGraphics, _BaseClass );
    var __proto = CGraphics.prototype;

    function CreateShader( nType, szSource )
    {
        var Content = this.m_Content;
        var Shader = Content.createShader( nType );
        Content.shaderSource( Shader, szSource );
        Content.compileShader( Shader );
        if ( !Content.getShaderParameter( Shader, Content.COMPILE_STATUS ) )
        {
            var szMessage = Content.getShaderInfoLog( Shader );
            throw szMessage;
        }
        return Shader;
    }

    __proto.CreateShaderProgram = function( szName, szVs, szPs )
    {
        var Content = this.m_Content;
        var vertexShader = CreateShader( Content.VERTEX_SHADER, szVs );
        var fragmentShader = CreateShader( Content.FRAGMENT_SHADER, szPs );
        var shaderProgram = Content.createProgram();
        Content.attachShader( shaderProgram, vertexShader );
        Content.attachShader( shaderProgram, fragmentShader );
        Content.linkProgram( shaderProgram );
        
        if ( !Content.getProgramParameter( shaderProgram, gl.LINK_STATUS ) )
        {
            var szMessage = Content.getProgramInfoLog( shaderProgram );
            throw szMessage;
        }
        
        this.m_ShaderProgram[szName] = shaderProgram;
        return shaderProgram;
    }

    __proto.GetShaderProgram = function( szName )
    {
        return this.m_ShaderProgram[szName];
    }

    
} )();