package zach.interview.controllers;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;

@Controller
public class ContactController {
	
	private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

	@GetMapping(value = "/")
    public String home() {

        return "index";
    }

	/*
	@RequestMapping(value = "/", method = RequestMethod.GET, produces = {"text/html"})
	public ModelAndView home()
    {
         ModelAndView modelAndView = new ModelAndView();
         modelAndView.setViewName("index");
         return modelAndView;
    }


	@RequestMapping(value = "/contact",method = RequestMethod.POST, produces = {"text/html"})
	public @ResponseBody String addHome() {
		
		return "<h1>POST</h1>"; //"application/json" mean this is a text not a redirect
	}

	@RequestMapping(method = RequestMethod.PUT, produces = {"text/html"})
	public @ResponseBody String updateHome() {
		
		return "<h1>PUT</h1>"; //"application/json" mean this is a text not a redirect
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = {"text/html"})
	public @ResponseBody String deleteHome() {
		
		return "<h1>DELETE</h1>"; //"application/json" mean this is a text not a redirect
	}
*/
}
