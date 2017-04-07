// to be bind to CardEditor or CardModal
var PopoverUtil = {
  labels: function(opt) {
    this.closeCurrent();    
    this.current = new LabelsPopover(opt);
  },
  labelEdit: function(opt) {
    this.closeCurrent();
    this.current = new LabelEditPopover(opt);
  },  
  labelDelete: function(opt) {
    this.closeCurrent();
    this.current = new LabelDeletePopover(opt)
  }, 
  duedate: function(opt) {
    this.closeCurrent();
    this.current = new DueDatePopover(opt);
  },
  move: function(opt) {
    this.closeCurrent();
    console.log("move");
  },
  copy: function(opt) {
    this.closeCurrent();
    console.log("copy");
  },
  listActions: function(opt) {
    this.closeCurrent();
    this.current = new ListActionsPopover(opt);
  },
  adjustPosition: function(e, offsetY) {
    var pos = $(e.currentTarget).offset();
    var result = {
      top: pos.top + offsetY
    };
    var windowWidth = $(document.body).innerWidth();
    if (pos.left + 350 > windowWidth) {
      result.left = windowWidth - 350;
    } else {
      result.left = pos.left;
    }
    return result;
  },
  renderCurrent: function() {
    if (this.current) { 
      this.current.render();
    }
  },
  closeCurrent: function() {
    if (this.current) { 
      this.current.remove(); 
      this.current = null;
    }
  },  
}
