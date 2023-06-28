# youtube-crate-digger

This is a small utility script I built around the youtube-dl ffmpeg programs to make it easier for me to download videos from my crate digging playlist. I find a lot of good stuff on youtube but manually copying urls one by one into various youtube to mp3 sites got to be a pain. So I built this.

Please keep in mind I wrote this in an afternoon so don't expect perfection, if you want to add features feel free to fork or put up a pull request.

## Pre-requisites

1. In order for this script to work you need to have [youtube-dl](https://github.com/ytdl-org/youtube-dl) and [ffmpeg](https://www.ffmpeg.org/) installed on your machine, or run this inside a docker container with those packages installed.
2. You need to either have nodejs installed on your machine or have docker installed if you want to run the docker container.

## Instructions

1. create an file called download-archive.txt, this file is how the script keeps track of what videos you've downloaded before
2. duplicate batchFile.example.txt and rename the duplicated file to batchFile.txt.
3. Place the url(s) of the video(s) or playlist(s) you want to download on seperate lines inside of batchFile.txt
4. Run the program

   with nodejs: `npm run build`

   with docker: `docker compose up --build`

   The program will then place all downloaded files inside of a downloads directory next to where the script is executed.

### Dry runs

If you want to test the script without actually downloading anything you can add the `DRY_RUN` env variable before executing: `DRY_RUN=true npm run build`

## notes

got my docker image from here: <https://hub.docker.com/r/nikolaik/python-nodejs/tags>
utility this is based on <https://github.com/ytdl-org/youtube-dl>
