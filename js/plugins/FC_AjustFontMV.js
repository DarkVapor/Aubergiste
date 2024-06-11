//=============================================================================
// FC_AjustFont .js
//=============================================================================

/*:
 * @plugindesc Adjust around the font.
 * @author Koji Marumugi
 * 
 * @param NoOutline
 * @desc Whether or not to remove the font outlines. (1: remove, 0: leave as is)
 * @default 0
 * 
 * @param NoGauge
 * @desc Whether or not to display each gauge. (1: Do not display, 0: Leave as is)
 * @default 0
 * 
 * @param SystemIsNomal
 * @desc Sets the system color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param CrisisIsNomal
 * @desc Sets the crisis color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param DeathIsNomal
 * @desc Sets the death color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param GaugeBackIsBlack
 * @desc Sets the background color of each gauge to black. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param HpGaugeIsNomal
 * @desc Sets the color of the HP gauge to the normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param MpGaugeIsNomal
 * @desc Sets the color of the MP gauge to the normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param MpCostIsNomal
 * @desc Sets the MP cost color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param PowerUpIsNomal
 * @desc Sets the power up color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param PowerDownIsNomal
 * @desc Sets the power down color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param TpGaugeIsNomal
 * @desc Sets the color of the TP gauge to the normal color. (1:ON, 0:OFF)
 * @default 0
 * 
 * @param TpCostIsNomal
 * @desc Sets the TP cost color of the font to normal color. (1:ON, 0:OFF)
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc フォントまわりを調節します。
 * @author Koji Marumugi
 * 
 * @param NoOutline
 * @desc フォントのアウトラインを消すかどうか。（1:消す、0:そのまま)
 * @default 0
 * 
 * @param NoGauge
 * @desc 各ゲージを表示するかどうか。（1:表示しない、0:そのまま)
 * @default 0
 * 
 * @param SystemIsNomal
 * @desc フォントのシステムカラーをノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param CrisisIsNomal
 * @desc フォントの瀕死時のカラーをノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param DeathIsNomal
 * @desc フォントの死亡時のカラーをノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param GaugeBackIsBlack
 * @desc フォントの各ゲージの背景色を黒にします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param HpGaugeIsNomal
 * @desc フォントのHPゲージの色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param MpGaugeIsNomal
 * @desc フォントのMPゲージの色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param MpCostIsNomal
 * @desc フォントのMPのコストの色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param PowerUpIsNomal
 * @desc フォントの上昇値の色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param PowerDownIsNomal
 * @desc フォントの下降値の色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param TpGaugeIsNomal
 * @desc フォントのTPゲージの色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
 * 
 * @param TpCostIsNomal
 * @desc フォントのTPのコストの色をノーマルカラーにします。（1:ON、0:OFF)
 * @default 0
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

    var name = 'FC_AjustFontMV';
    var parameters = PluginManager.parameters(name);
    var noOutline = Number(parameters['NoOutline'] || 0);
    var noGauge = Number(parameters['NoGauge'] || 0);
    var system = Number(parameters['SystemIsNomal'] || 0);
    var crisis = Number(parameters['CrisisIsNomal'] || 0);
    var death = Number(parameters['DeathIsNomal'] || 0);
    var gaugeBack = Number(parameters['GaugeBackIsBlack'] || 0);
    var hpGauge = Number(parameters['HpGaugeIsNomal'] || 0);
    var mpGauge = Number(parameters['MpGaugeIsNomal'] || 0);
    var mpCost = Number(parameters['MpCostIsNomal'] || 0);
    var powerUp = Number(parameters['PowerUpIsNomal'] || 0);
    var powerDown = Number(parameters['PowerDownIsNomal'] || 0);
    var tpGauge = Number(parameters['TpGaugeIsNomal'] || 0);
    var tpCost = Number(parameters['TpCostIsNomal'] || 0);

 
    if(system === 1) {
        var _window_Base_systemColor = Window_Base.prototype.systemColor;
        Window_Base.prototype.systemColor = function() {
            _window_Base_systemColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(crisis === 1) {
        var _window_Base_crisisColor = Window_Base.prototype.crisisColor;
        Window_Base.prototype.crisisColor = function() {
            _window_Base_crisisColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(death === 1) {
        var _window_Base_deathColor = Window_Base.prototype.deathColor;
        Window_Base.prototype.deathColor = function() {
            _window_Base_deathColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(gaugeBack === 1) {
        var _window_Base_gaugeBackColor = Window_Base.prototype.gaugeBackColor;
        Window_Base.prototype.gaugeBackColor = function() {
            _window_Base_gaugeBackColor.apply(this, arguments);
            return this.textColor(15);
        }
    };

    if(hpGauge === 1) {
        var _window_Base_hpGaugeColor1 = Window_Base.prototype.hpGaugeColor1;
        Window_Base.prototype.hpGaugeColor1 = function() {
            _window_Base_hpGaugeColor1.apply(this, arguments);
            return this.textColor(0);
        }

        var _window_Base_hpGaugeColor2 = Window_Base.prototype.hpGaugeColor2;
        Window_Base.prototype.hpGaugeColor2 = function() {
            _window_Base_hpGaugeColor2.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(mpGauge === 1) {
        var _window_Base_mpGaugeColor1 = Window_Base.prototype.mpGaugeColor1;
        Window_Base.prototype.mpGaugeColor1 = function() {
            _window_Base_mpGaugeColor1.apply(this, arguments);
            return this.textColor(0);
        }

        var _window_Base_mpGaugeColor2 = Window_Base.prototype.mpGaugeColor2;
        Window_Base.prototype.mpGaugeColor2 = function() {
            _window_Base_mpGaugeColor2.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(mpCost === 1) {
        var _window_Base_mpCostColor = Window_Base.prototype.mpCostColor;
        Window_Base.prototype.mpCostColor = function() {
            _window_Base_mpCostColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(powerUp === 1) {
        var _window_Base_powerUpColor = Window_Base.prototype.powerUpColor;
        Window_Base.prototype.powerUpColor = function() {
            _window_Base_powerUpColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(powerDown === 1) {
        var _window_Base_powerDownColor = Window_Base.prototype.powerDownColor;
        Window_Base.prototype.powerDownColor = function() {
            _window_Base_powerDownColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(tpGauge === 1) {
        var _window_Base_tpGaugeColor1 = Window_Base.prototype.tpGaugeColor1;
        Window_Base.prototype.tpGaugeColor1 = function() {
            _window_Base_tpGaugeColor1.apply(this, arguments);
            return this.textColor(0);
        }

        var _window_Base_tpGaugeColor2 = Window_Base.prototype.tpGaugeColor2;
        Window_Base.prototype.tpGaugeColor2 = function() {
            _window_Base_tpGaugeColor2.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(tpCost === 1) {
        var _window_Base_tpCostColor = Window_Base.prototype.tpCostColor;
        Window_Base.prototype.tpCostColor = function() {
            _window_Base_tpCostColor.apply(this, arguments);
            return this.textColor(0);
        }
    };

    if(noGauge === 1) {
        Window_Base.prototype.drawGauge = function(x, y, width, rate, color1, color2) {}
    };

    if(noOutline === 1) {
        var _bitmap_initialize = Bitmap.prototype.initialize;
        Bitmap.prototype.initialize = function(width, height) {
            if(!this._defer){
                this._createCanvas(width, height);
            }
        
            this._image = null;
            this._url = '';
            this._paintOpacity = 255;
            this._smooth = false;
            this._loadListeners = [];
            this._loadingState = 'none';
            this._decodeAfterRequest = false;
        
            /**
             * Cache entry, for images. In all cases _url is the same as cacheEntry.key
             * @type CacheEntry
             */
            this.cacheEntry = null;
        
            /**
             * The face name of the font.
             *
             * @property fontFace
             * @type String
             */
            this.fontFace = 'GameFont';
        
            /**
             * The size of the font in pixels.
             *
             * @property fontSize
             * @type Number
             */
            this.fontSize = 28;
        
            /**
             * Whether the font is italic.
             *
             * @property fontItalic
             * @type Boolean
             */
            this.fontItalic = false;
        
            /**
             * The color of the text in CSS format.
             *
             * @property textColor
             * @type String
             */
            this.textColor = '#ffffff';
        
            /**
             * The color of the outline of the text in CSS format.
             *
             * @property outlineColor
             * @type String
             */
            this.outlineColor = 'rgba(0, 0, 0, 0)';
        
            /**
             * The width of the outline of the text.
             *
             * @property outlineWidth
             * @type Number
             */
            this.outlineWidth = 0;
            
        };
        _bitmap_initialize.apply(this, arguments);

    };

    
})();