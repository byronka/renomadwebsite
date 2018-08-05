in order to send this to its proper place in the file system, run


send_to_output


to generate the html file for the photos, run this:

for i in $(ls); do echo "<p><a href=\"./$i\">$i</a></p>" >> photos.htm; done
