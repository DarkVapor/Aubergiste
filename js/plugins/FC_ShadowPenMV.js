//=============================================================================
// FC_ShadowPenMV.js
//=============================================================================

/*:
 * @plugindesc Adjusts the opacity of the shadow pen.
 * @author Koji Marumugi
 * 
 * @param Opacity
 * @desc Enter the opacity of the shadow pen between 0 (transparent) and 1 (opaque). (Default 0.5)
 * @default 0.5
 *
 * @help This plugin does not provide plugin commands.
 * You can see the changes in the play screen, but not in the editor.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc 影ペンの不透明度を調節します。
 * @author Koji Marumugi
 * 
 * @param Opacity
 * @desc 影ペンの不透明度を、0（透明）～1（不透明）の間で入力します。（デフォルト0.5）
 * @default 0.5
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * また、エディタ上では変化せず、プレイ画面にて変化を確認する事が出来ます。
 * 
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(()=>{
    'use strict';

    var name = 'FC_ShadowPenMV';
    var parameters = PluginManager.parameters(name);
    var opacity = Number(parameters['Opacity'] || 0);

    var _shaderTilemap_createLayers = ShaderTilemap.prototype._createLayers;
    ShaderTilemap.prototype._createLayers = function() {

        var width = this._width;
        var height = this._height;
        var margin = this._margin;
        var tileCols = Math.ceil(width / this._tileWidth) + 1;
        var tileRows = Math.ceil(height / this._tileHeight) + 1;
        var layerWidth = this._layerWidth = tileCols * this._tileWidth;
        var layerHeight = this._layerHeight = tileRows * this._tileHeight;
        this._needsRepaint = true;
    
        if (!this.lowerZLayer) {
            //@hackerham: create layers only in initialization. Doesn't depend on width/height
            this.addChild(this.lowerZLayer = new PIXI.tilemap.ZLayer(this, 0));
            this.addChild(this.upperZLayer = new PIXI.tilemap.ZLayer(this, 4));
    
            var parameters = PluginManager.parameters('ShaderTilemap');
            var useSquareShader = Number(parameters.hasOwnProperty('squareShader') ? parameters['squareShader'] : 0);
    
            this.lowerZLayer.addChild(this.lowerLayer = new PIXI.tilemap.CompositeRectTileLayer(0, [], useSquareShader));
            this.lowerLayer.shadowColor = new Float32Array([0.0, 0.0, 0.0, opacity]);
            this.upperZLayer.addChild(this.upperLayer = new PIXI.tilemap.CompositeRectTileLayer(4, [], useSquareShader));

        }
        _shaderTilemap_createLayers.apply(this, arguments);
    };   

})();