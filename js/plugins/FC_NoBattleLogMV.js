//=============================================================================
// FC_NoBattleLogMV.js
//=============================================================================

/*:
 * @plugindesc Hides the battle log displayed at the top of the battle screen.
 * @author Koji Marumugi
 *
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc 戦闘画面で上部に表示されるバトルログを非表示にします。
 * @author Koji Marumugi
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

    var _window_BattleLog_addText = Window_BattleLog.prototype.addText;
    Window_BattleLog.prototype.addText = function(text) {
        return;
        _window_BattleLog_addText.apply(this, arguments);
    }

    var _window_BattleLog_backPaintOpacity = Window_BattleLog.prototype.backPaintOpacity;
    Window_BattleLog.prototype.backPaintOpacity = function() {
        return 0;
        _window_BattleLog_backPaintOpacity.apply(this, arguments);
    }

})();