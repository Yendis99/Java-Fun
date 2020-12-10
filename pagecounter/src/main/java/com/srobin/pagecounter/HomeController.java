package com.srobin.pagecounter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.Model;

@Controller
public class HomeController{
	@RequestMapping("/counter")
	public String index(HttpSession session, Model model){ //Thanks Brendan

		if(session.getAttribute("count") != null) {
			
			Integer count = (Integer) session.getAttribute("count") + 1;
			session.setAttribute("count", count);
			model.addAttribute("count", count);
			return "index.jsp";
		}
		else {
       session.setAttribute("count", 0);
       Integer count = (Integer) session.getAttribute("count");
	   	model.addAttribute("count", count);
		return "index.jsp";
      
		}   	
	}
	
}

	
	
	
	
	

	

	
	
