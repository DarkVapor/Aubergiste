//=============================================================================
// FC_WindowOpacity.js
//=============================================================================

/*:
 * @plugindesc Adjusts the transparency of the window.
 * @author Koji Marumugi
 *
 * @param Opacity
 * @desc Adjusts the transparency between 0 (transparent) and 255 (opaque). (Default: 192)
 * @default 192
 * 
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc ウインドウの透明度を調整します。
 * @author Koji Marumugi
 * 
 * @param Opacity
 * @desc 0（透明）～255（不透明）の間で、透明度を調節します。（デフォルト192）
 * @default 192
 *
 * @help このプラグインには、プラグインコマンドはありません。
 * 
 * ■ライセンス表記
 * このプラグインは MIT ライセンスで配布されます。
 * ご自由にお使いください。
 * http://opensource.org/licenses/mit-license.php
 */

(()=>{
    'use strict';

    var parameters = PluginManager.parameters('FC_WindowOpacity');
    var opacity = Number(parameters['Opacity'] || 0);

    var _Window_Base_standardBackOpacity = Window_Base.prototype.standardBackOpacity;
    Window_Base.prototype.standardBackOpacity = function() {
          return opacity;
          _Window_Base_standardBackOpacity.apply(this, arguments); 
    };

})();