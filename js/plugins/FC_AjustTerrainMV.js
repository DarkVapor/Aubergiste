//=============================================================================
// FC_AjustTerrainMV.js
//=============================================================================

/*:
 * @plugindesc Optimize the auto-selected battle background in the field map.
 * @author Koji Marumugi
 * 
 * @param MakeBlack
 * @desc Sets all auto-selected battle backgrounds on the field map to black. (0: Do not blacken 1: Blacken)
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 * 
 * [License]
 * this plugin is released under MIT license.
 * http://opensource.org/licenses/mit-license.php
 */

/*:ja
 * @plugindesc フィールドマップで自動選択される戦闘背景を最適化します。
 * @author Koji Marumugi
 * 
 * @param MakeBlack
 * @desc フィールドマップで自動選択される戦闘背景をすべて黒にします。（0:黒くしない 1:黒くする）
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

    var name = 'FC_AjustTerrainMV';
    var parameters = PluginManager.parameters(name);
    var black = Number(parameters['MakeBlack'] || 0);

    if(black === 1) {
        var _spriteset_Battle_terrainBattleback1Name = Spriteset_Battle.prototype.terrainBattleback1Name;
        Spriteset_Battle.prototype.terrainBattleback1Name = function(type) {
            return "00Black";
        };

    }else {
            var _spriteset_Battle_terrainBattleback1Name = Spriteset_Battle.prototype.terrainBattleback1Name;
            Spriteset_Battle.prototype.terrainBattleback1Name = function(type) {
                switch (type) {
                    case 0:
                    case 1:
                    case 2:
                    case 11:
                        return "Ship"
                    case 3:
                        return "IceFloe"
                    case 8:
                    case 9:
                        return "Lake"
                    case 17:
                    case 18:
                        return "Grassland2"
                    case 19:
                        return "Swamp"
                    case 24:
                    case 25:
                        return "Wasteland";
                    case 26:
                    case 27:
                        return "DirtField";
                    case 32:
                    case 33:
                        return "Desert";
                    case 34:
                        return "Lava1";
                    case 35:
                        return "Lava2";
                    case 10:
                    case 40:
                        return "Snowfield";
                    case 41:
                        return "SnowHill"
                    case 42:
                        return "Clouds";
                default:
                    return null;
                };
        
                _spriteset_Battle_terrainBattleback1Name.apply(this, arguments);
        
            }; 
        }; 


    if(black === 1) {
        var _spriteset_Battle_terrainBattleback2Name = Spriteset_Battle.prototype.terrainBattleback2Name;
        Spriteset_Battle.prototype.terrainBattleback2Name = function(type) {
            return null;
        }
    }else {
        var _spriteset_Battle_terrainBattleback2Name = Spriteset_Battle.prototype.terrainBattleback2Name;
        Spriteset_Battle.prototype.terrainBattleback2Name = function(type) {

            switch (type) {
                case 4:
                case 5:
                    return "PoisonSwamp";
                case 6:
                case 7:
                    return "Lava3"
                case 15:
                    return "Clouds"
                case 20:
                case 21:
                    return "Forest";
                case 22:
                    return "GreenHill"
                case 23:
                case 38:
                case 39:
                case 46:
                    return "Cliff"
                case 28:
                    return "Wasteland2";
                case 29:
                    return "Pavement";
                case 30:
                    return "DryHill"
                case 31:
                    return "DirtField"
                case 36:
                    return "PalmForest";
                case 37:
                    return "Flagstone";
                case 44:
                    return "SnowForest";
                case 47:
                    return "SnowCliff"
            
        }

        _spriteset_Battle_terrainBattleback2Name.apply(this, arguments);
    };

    }

    
})();