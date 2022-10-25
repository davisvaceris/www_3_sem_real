 var products_list= document.getElementById('product_list');
for (var i = 1; i <122; i++) {
	var element_1= document.createElement('p');
	element_1.appendChild(document.createTextNode('Product ' + i+' small description')); 
	var element_2=document.createElement('h3');
	element_2.appendChild(document.createTextNode('Product ' + i+' name'));
	var element_3= document.createElement("a")
	element_3.href = "products/product-"+i+".html";
	element_3.appendChild(element_2);
	element_3.appendChild(element_1);
	var element_4 = document.createElement('div');
	element_4.classList.add('product');
	element_4.appendChild(element_3);
	products_list.appendChild(element_4);
	
}
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length;i++) {
            products[i].classList.add('me-sm-3');
            products[i].classList.add('me-0');
            products[i].classList.add('col-md-3');
            products[i].classList.add('col-sm-4');
            products[i].classList.add('col-11');
    }

	var products = document.getElementsByClassName('product');


	(function($) {
		var pagify = {
			items: {},
			container: null,
			totalPages: 1,
			perPage: 25,
			currentPage: 0,
			createNavigation: function() {
				this.totalPages = Math.ceil(this.items.length / this.perPage);
	
				$('.pagination', this.container.parent()).remove();
				var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');
	
				for (var i = 0; i < this.totalPages; i++) {
					var pageElClass = "page";
					if (!i)
						pageElClass = "page current";
					var pageEl = '<a class="' + pageElClass + '" data-page="' + (
					i + 1) + '">' + (
					i + 1) + "</a>";
					pagination.append(pageEl);
				}
				pagination.append('<a class="nav next" data-next="true">></a>');
	
				this.container.after(pagination);
	
				var that = this;
				$("body").off("click", ".nav");
				this.navigator = $("body").on("click", ".nav", function() {
					var el = $(this);
					that.navigate(el.data("next"));
				});
	
				$("body").off("click", ".page");
				this.pageNavigator = $("body").on("click", ".page", function() {
					var el = $(this);
					that.goToPage(el.data("page"));
				});
			},
			navigate: function(next) {
				// default perPage to 5
				if (isNaN(next) || next === undefined) {
					next = true;
				}
				$(".pagination .nav").removeClass("disabled");
				if (next) {
					this.currentPage++;
					if (this.currentPage > (this.totalPages - 1))
						this.currentPage = (this.totalPages - 1);
					if (this.currentPage == (this.totalPages - 1))
						$(".pagination .nav.next").addClass("disabled");
					}
				else {
					this.currentPage--;
					if (this.currentPage < 0)
						this.currentPage = 0;
					if (this.currentPage == 0)
						$(".pagination .nav.prev").addClass("disabled");
					}
	
				this.showItems();
			},
			updateNavigation: function() {
	
				var pages = $(".pagination .page");
				pages.removeClass("current");
				$('.pagination .page[data-page="' + (
				this.currentPage + 1) + '"]').addClass("current");
			},
			goToPage: function(page) {
	
				this.currentPage = page - 1;
	
				$(".pagination .nav").removeClass("disabled");
				if (this.currentPage == (this.totalPages - 1))
					$(".pagination .nav.next").addClass("disabled");
	
				if (this.currentPage == 0)
					$(".pagination .nav.prev").addClass("disabled");
				this.showItems();
			},
			showItems: function() {
				this.items.hide();
				var base = this.perPage * this.currentPage;
				this.items.slice(base, base + this.perPage).show();
	
				this.updateNavigation();
			},
			init: function(container, items, perPage) {
				this.container = container;
				this.currentPage = 0;
				this.totalPages = 1;
				this.perPage = perPage;
				this.items = items;
				this.createNavigation();
				this.showItems();
			}
		};
	
		// stuff it all into a jQuery method!
		$.fn.pagify = function(perPage, itemSelector) {
			var el = $(this);
			var items = $(itemSelector, el);
	
			// default perPage to 5
			if (isNaN(perPage) || perPage === undefined) {
				perPage = 3;
			}
	
			// don't fire if fewer items than perPage
			if (items.length <= perPage) {
				return true;
			}
	
			pagify.init(el, items, perPage);
		};
	})(jQuery);
	
	$(".products").pagify(26, ".product");
	var products =document.getElementsByClassName('pagination');
	products[0].classList.add('col-12');
	products[0].classList.add('d-flex');
	products[0].classList.add('justify-content-center');
	
