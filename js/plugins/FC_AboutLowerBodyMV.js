//=============================================================================
// FC_AboutLowerBodyMV.js
//=============================================================================

/*:
 * @plugindesc Adjust the opacity and depth of the lower part of the body that is hidden by bushes, etc.
 * @author Koji Marumugi
 *
 * @param LowerBodyOpacity
 * @desc Enter the opacity of the lower half of the body that is hidden by bushes, etc., between 0 (transparent) and 255 (opaque). (Default 128)
 * @default 128
 *
 * @param size
 * @desc Enter the depth (pxcel) of the lower part of the body that is hidden by bushes, etc. (Default 12)
 * @default 12
 *  
 * @help This plugin does not provide plugin commands.
 * 
 *  [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc 茂みなどに隠れる下半身の不透明度、深さを調整します。
 * @author Koji Marumugi
 * 
 * @param LowerBodyOpacity
 * @desc 茂みなどに隠れる下半身の不透明度を、0（透明）～255（不透明）の間で入力します。（デフォルト128）
 * @default 128
 * 
 * @param size
 * @desc 茂みなどに隠れる下半身の深さ(pxcel)を入力します。（デフォルト12）
 * @default 12
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

    var name = 'FC_AboutLowerBodyMV';
    var parameters = PluginManager.parameters(name);
    var lowerBodyOpacity = Number(parameters['LowerBodyOpacity'] || 0);
    var size = Number(parameters['size'] || 0);

    var _Sprite_Character_createHalfBodySprites = Sprite_Character.prototype.createHalfBodySprites;
    Sprite_Character.prototype.createHalfBodySprites = function() {

        if (!this._upperBody) {
            this._upperBody = new Sprite();
            this._upperBody.anchor.x = 0.5;
            this._upperBody.anchor.y = 1;
            this.addChild(this._upperBody);
        }
        if (!this._lowerBody) {
            this._lowerBody = new Sprite();
            this._lowerBody.anchor.x = 0.5;
            this._lowerBody.anchor.y = 1;
            this._lowerBody.opacity = lowerBodyOpacity;
            this.addChild(this._lowerBody);
        }

        _Sprite_Character_createHalfBodySprites.apply(this, arguments);

    };

    var _game_CharacterBase_refreshBushDepth = Game_CharacterBase.prototype.refreshBushDepth;
    Game_CharacterBase.prototype.refreshBushDepth = function() {

        var ret = _game_CharacterBase_refreshBushDepth.apply(this, arguments);

        if (
            this.isNormalPriority() &&
            !this.isObjectCharacter() &&
            this.isOnBush() &&
            !this.isJumping()
        ) {
            if (!this.isMoving()) {
                this._bushDepth = size;
            }
        } else {
            this._bushDepth = 0;
        } 

        return ret;

    }

})();