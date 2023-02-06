var inventory;
function generateElements(html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.children;
}

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      //$("#order_date").text(date.toUTCString());
      document.getElementById('order_date').textContent = date.toUTCString();
    },
    cacheTemplate: function() {
      //var iTmpl = $("#inventory_item").remove();
      var iTmpl = document.querySelector('#inventory_item');
      iTmpl.remove();
      this.template = iTmpl.innerHTML;
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === parseInt(id)) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function($item) {
      var id = this.findID($item),
          item = this.get(id);

      //item.name = $item.find("[name^=item_name]").val();
      item.name = $item.querySelector('[name^=item_name').value;
      //item.stock_number = $item.find("[name^=item_stock_number]").val();
      item.stock_number = $item.querySelector('[name^=item_stock_number]').value;
      //item.quantity = $item.find("[name^=item_quantity]").val();
      item.quantity = $item.querySelector("[name^=item_quantity]").value;
      //debugger;
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add(),
          //$item = $(this.template.replace(/ID/g, item.id)),
          $item = generateElements(this.template.replace(/ID/g, item.id))[0];

      //$("#inventory").append($item);
      //const template = document.getElementById('inventory_item');
      const templateScript = Handlebars.templates.newItem({id: item.id});
      //const templateScript = Handlebars.compile(template);
      //const context = {id: item.id,};
      //const html = templateScript(context);
      //document.getElementById('inventory').append($item);
      document.getElementById('inventory').append(generateElements(templateScript)[0]);
    },
    findParent: function(e) {
      return e.target.closest('tr');
      //return $(e.target).closest("tr");
    },
    findID: function($item) {
      return $item.querySelector('input[type=hidden]').value;
      //return +$item.find("input[type=hidden]").val();
    },
    deleteItem: function(e) {
      e.preventDefault();
      var $item = this.findParent(e);
      $item.remove();

      this.remove(this.findID($item));
    },
    updateItem: function(e) {
      var $item = this.findParent(e);

      this.update($item);
    },
    bindEvents: function() {
      //$("#add_item").on("click", $.proxy(this.newItem, this));
      document.getElementById('add_item').addEventListener('click', this.newItem.bind(this));
      //$("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      let self = this;
      document.getElementById('inventory').addEventListener('click', function(event) {
        if (event.target.closest('a.delete')) {
          self.deleteItem(event);
        }
      });
      //$("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
      document.getElementById('inventory').addEventListener('blur', function(event) {
        if (event.target.closest('input')) {
          self.updateItem(event);
        }
      });

    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

//$($.proxy(inventory.init, inventory));
document.addEventListener('DOMContentLoaded', () => {
  inventory.init();
});
