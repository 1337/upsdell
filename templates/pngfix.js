
function correctPNG()
   {
   for(i=0; i<document.images.length; i++)
      {
      var img = document.images[i]
      var imgName = img.src.toUpperCase()
      if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
         {
         var imgID = (img.id) ? "id='" + img.id + "' " : ""
         var imgClass = (img.className) ? "class='" + img.className + "' " : ""
         var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
         var imgStyle = (img.style.cssText) ? img.style.cssText + ";" : ""
         var floatOrBlock = "display:inline-block;"
         var oAttribs = img.attributes;
         for (var j=0; j<oAttribs.length; j++)
            {
            var oAttrib = oAttribs[j];
            if (oAttrib.nodeName == "align")
               {
               switch(oAttrib.nodeValue)
                  {
                  case "left"  : floatOrBlock = "float:left;"  ; break;
                  case "right" : floatOrBlock = "float:right;" ; break;
                  }
                break;
               }
            }
         var strNewHTML = "<span " + imgID + imgClass + imgTitle
         strNewHTML += " style=\"" + floatOrBlock + imgStyle
         strNewHTML += " width:" + img.width + "px; height:" + img.height + "px; "
         strNewHTML += "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + img.src + "\');\">"
         strNewHTML += "</span>";
         img.outerHTML = strNewHTML
         i = i-1
         }
      }
   }
document.body.onload = correctPNG