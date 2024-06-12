/*:
 * @plugindesc Affiche le nom du personnage au-dessus de l'image du personnage et du texte du dialogue.
 * @help Ce plugin affiche le nom du personnage au-dessus de l'image du personnage et du texte du dialogue,
 * en utilisant le champ Note de l'événement ou la balise \N[nom_du_personnage] dans le texte du dialogue.
 */

(function() {

    var _Window_Message_prototype_convertEscapeCharacters = Window_Message.prototype.convertEscapeCharacters;
    Window_Message.prototype.convertEscapeCharacters = function(text) {
        text = _Window_Message_prototype_convertEscapeCharacters.call(this, text);
        var nameMatch = text.match(/\x1bN\[(.*?)\]/i);
        var eventId = $gameMap._interpreter._eventId;
        var event = eventId > 0 ? $gameMap.event(eventId) : null;
        var eventName = event ? event.event().note : "";
        var name = nameMatch ? nameMatch[1] : eventName;
        
        if (nameMatch) {
            text = text.replace(nameMatch[0], "");
        }

        if (name) {
            this._nameWindow.setText(name);
            this._nameWindow.show();
            this._nameWindow.open();
        } else {
            this._nameWindow.close();
        }

        return text;
    };

    var _Window_Message_prototype_startMessage = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        _Window_Message_prototype_startMessage.call(this);
        var name = this._nameWindow._text;
        if (name) {
            this._nameWindow.show();
            this._nameWindow.open();
        } else {
            this._nameWindow.close();
        }
    };

    var _Window_Message_prototype_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        _Window_Message_prototype_terminateMessage.call(this);
        this._nameWindow.close();
    };

    var _Scene_Map_prototype_createMessageWindow = Scene_Map.prototype.createMessageWindow;
    Scene_Map.prototype.createMessageWindow = function() {
        _Scene_Map_prototype_createMessageWindow.call(this);
        this._messageWindow._nameWindow = new Window_Name();
        this.addWindow(this._messageWindow._nameWindow);
    };

    function Window_Name() {
        this.initialize.apply(this, arguments);
    }

    Window_Name.prototype = Object.create(Window_Base.prototype);
    Window_Name.prototype.constructor = Window_Name;

    Window_Name.prototype.initialize = function() {
        var width = 240;
        var height = this.fittingHeight(1);
        var x = (Graphics.width - width) / 2;
        var y = this._messageWindow ? this._messageWindow.y - height : 0;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.openness = 0;
        this._text = '';
    };

    Window_Name.prototype.setText = function(text) {
        this._text = text;
        this.refresh();
    };

    Window_Name.prototype.refresh = function() {
        this.contents.clear();
        this.drawText(this._text, 0, 0, this.contentsWidth(), 'center');
    };

})();
