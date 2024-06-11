//=============================================================================
// FC_SVCharaPositionMV.js
//=============================================================================

/*:
 * @plugindesc Adjust the position of the SV Actors.
 * @author Koji Marumugi
 *
 * @param x
 * @desc X coordinate of the topmost character.（default 600）
 * @default 600
 * 
 * @param spaceX
 * @desc How many pixels should be shifted horizontally from top to bottom?（default 32）
 * @default 32
 * 
 * @param y
 * @desc Y-coordinate of the topmost character when the bottom edge of the battle background image is set to 0.（default 120）
 * @default 120
 * 
 * @param spaceY
 * @desc The vertical distance between characters.（default -15）
 * @default -15
 * 
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc SVキャラの位置を調整します
 * @author Koji Marumugi
 * 
 * @param x
 * @desc 一番上のキャラのＸ座標。（デフォルト600）
 * @default 600
 * 
 * @param spaceX
 * @desc 上から下にかけて横方向に何ピクセルずらすか。（デフォルト32）
 * @default 32
 * 
 * @param y
 * @desc 戦闘背景画像の下端を0とした時の、一番上のキャラのＹ座標。（デフォルト120）
 * @default 120
 *
 * @param spaceY
 * @desc キャラ同士の縦方向の間隔。（デフォルト-15）
 * @default -15
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

    var name = 'FC_SVCharaPositionMV';
    var parameters = PluginManager.parameters(name);
    var x = Number(parameters['x'] || 0);
    var spaceX = Number(parameters['spaceX'] || 0);
    var y = Number(parameters['y'] || 0);
    var spaceY = Number(parameters['spaceY'] || 0);

    var _sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
    Sprite_Actor.prototype.setActorHome = function(index) {
        var ret = _sprite_Actor_setActorHome.apply(this, arguments);

        this.setHome(x + index * (1 + spaceX), 160 + y + index * (63 + spaceY));

        return ret;
    }
})();