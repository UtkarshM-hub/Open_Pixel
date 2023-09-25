# Contributing to Open_Pixel

Note: Contributor should make sure that the "Live Server" extension is installed on his/her VSCode

## Setup on your local machine

Follow the given steps to setup the project into your local machine

1.  Fork this repository

2.  Copy the link of the forked repository

3.  Open git bash or terminal and type following command

        git clone <link_of_forked_repository>

4.  Open that folder into VSCode

5.  Open index.html file, Right click and select "Open With Live Server" option

## Steps to contribute

Follow the given steps to make your contribution to this project

1.  After running the project, find an empty square and note down its `x` and `y` values

2.  Now, open `data.json` folder and find an object whose `x` and `y` values matches with the values of square you've selected.

3.  Change the value of `color` and `name` according to your preference

4.  Open Terminal and type following command
    
        git add .
        git commit -m "Feat: Add My Pixel(x,y)"
        git push
    ### NOTE: Replace x and y with your values of x and y.   

6.  Open you forked repository, click on `Create a Pull Request`

7.  Let the title of the pull request as it is and click on `Create a Pull Request`

## Congratulations! you have successfully contributed to this project🎉
