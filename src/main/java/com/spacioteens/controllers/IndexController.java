package com.spacioteens.controllers;

@Controller
@RequestMapping("/")
public class IndexController {
	@RequestMapping(value="2", method=RequestMethod.GET)
	public String getUserForm() {
		
		return "index";
	}
}

