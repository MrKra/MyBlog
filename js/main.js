$(document).ready(function(){


	/****************
	 Sidebar Spoiler
	***************/
	const $menuTitle = $(".sidebar-menu-title");
	
	$menuTitle.on("click", function() {
		const $this = $(this);
		const $menuList = $this.next(".sidebar-menu-list");
		
		if ($menuList.length) {
			$this.toggleClass("active");
			$menuList.slideToggle(500);
		}
	});
	
	/**************************
	 Sidebar Spoiler Menu List
	***************************/
	const $menuItems = $(".sidebar-menu-item");
		$menuItems.has(".sidebar-menu-sublist").find(".sidebar-menu-link")
		.append('<span class="submenu-arrow"><i class="fa-solid fa-caret-down"></i></span>');
	
	$menuItems.on("click", function(){
		const $this = $(this);
		const $sublist = $this.find(".sidebar-menu-sublist");
		const $siblings = $this.siblings();
		
		$siblings.removeClass('active').find(".sidebar-menu-sublist").slideUp(500);
		$this.toggleClass('active');
		$sublist.slideToggle(500);
	});
	
	/**********
	ON Spoiler
	**********/
	const $spoilerTitle = $(".spoiler-title");
	$spoilerTitle.on("click", function(){
		const $this = $(this);
		const $spoiler = $(".spoiler");
		
		if($spoiler.hasClass("one")){
			$spoilerTitle.not($this).removeClass('active')
				.next().slideUp(500);
		}
		$this.toggleClass('active')
			.next().slideToggle(500);
	});
	
});