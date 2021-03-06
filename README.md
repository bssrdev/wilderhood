**Writing a post**

 - Posts are present in _posts folder. One file should be present in _posts folder for every post. 
 - Naming convention should be followed. yyyy-mm-dd-{some title text} 
 - File name will appear in the url of the post
 - All images for the site are in /img/ folder
 - For every post, create a folder with yyyy-mm-dd folder in /img/ folder
	 - This is only a convention for better organizing. The same folder name should be referenced in the image links in the post.  
	 - Ex:- `<img src="{{ site.baseurl }}/img/2015-01-18/image002.jpg" alt="Image1">`

**Adding a tag to a post**

 - In a post file, add *tags* section at the top .
 - For every tag added, make sure there is a file in /metapages/tags/{tag name}.md

**Adding an author to a post**

 - In a post file, add *author* section at the top.
 - For every author added, make sure there is a file in /metapages/authors/{author name}.md
 - In the {author name}.md 
	 - provide all social links available, rest of them can be left out
	 - avatar is an image file name for the author - need to be present in /img/ folder

**Building Instructions**

 - Need to install ruby if not present. For windows users - http://rubyinstaller.org/downloads/
 - Also install corresponding devkit from the same page
 - Install jekyll - http://jekyllrb.com/docs/installation/
	 - gem install jekyll
 - *Build:-* jekyll build
 - *Run:-* jekyll serve
 - For editing css, need nodejs
	 - Install less preprocessor - `npm install -g less`
	 - From blog root directory execute following command to generate minified css
		 - `lessc -x ./less/clean-blog.less > ./css/clean-blog.min.css`

**Miscellaneous** 
 - Built static site will sit in /_site/ folder. This folder is not needed for github as github does a build after upload.
 - Check for detailed directory structure - http://jekyllrb.com/docs/structure/
 - _includes - contains html snippet code like header, footer
 - _layouts - contains template code which will be customized based on the site/page variables
 - _posts - all the posts. one file for every post
 - _plugins - this folder will not be considered in github as it wont allow jekyll plugins
 - For testing locally, in a template file add `{{ anyvariable | debug}}` where anyvariable is anything that is valid. Ex:- page


jekyll s -c _config-dev.yml --> To run development mode
jekyll s --no-watch
jekyll s --no-watch -c _config-dev.yml
jekyll s --verbose --trace --> To see all files getting generated

How to debug:-
https://github.com/octopress/debugger

------------------------------------------------------------------------------------------
Adding fancybox images

Add the following in the post body:-
	<div class="w-entity-images">
	<a class="fancybox" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography1.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography1.jpg" alt="">
	</a>
	<a class="fancybox" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography2.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography2.jpg" alt="">
	</a>
	<a class="fancybox" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography3.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography3.jpg" alt="">
	</a>
	<a class="fancybox nodisplay" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography4.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography4.jpg" alt="">
	</a>
	<a class="fancybox nodisplay" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography5.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography5.jpg" alt="">
	</a>
	<a class="fancybox nodisplay" rel="group1" href="http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography6.jpg">
	<img class="w-small-image-preview" src="http://az741737.vo.msecnd.net/wilderhood-public/small/Toehold/Trip/Bandipur/Bandipur_photography6.jpg" alt="">
	</a>
	<div class="w-small-image-preview-extra open_fancybox" data-fancybox="gFancyBoxImageList">
	<span class="fa-stack">
	<i class="fa fa-circle fa-stack-2x"></i>
	<i class="fa fa-plus fa-stack-1x fa-inverse"></i>
	</span>
	</div>
	</div>

	<script>
	var whood = whood || {};
	whood.gFancyBoxImageList = [];
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography1.jpg", title: ""});
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography2.jpg", title: ""});
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography3.jpg", title: ""});
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography4.jpg", title: ""});
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography5.jpg", title: ""});
	whood.gFancyBoxImageList.push({href: "http://az741737.vo.msecnd.net/wilderhood-public/large/Toehold/Trip/Bandipur/Bandipur_photography6.jpg", title: ""});
	</script>

Add the following in the post yaml front part section (variables in a post file):-
needFancyBox: true
------------------------------------------------------------------------------------------
