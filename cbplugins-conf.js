audio: {
        prefix: 'audio/',     // audio files are stored in the "audio" folder
        suffix: '.mp3',        // audio files have the ".ogg" ending
        textToSpeechURL: null,  // the URL to the text to speech converter
        defaultNotes: false,     // use slide notes as default for the text to speech converter
        defaultText: false,     // use slide text as default for the text to speech converter
        advance: -1,         // advance to next slide after given time in milliseconds after audio has played, use negative value to not advance 
        autoplay: true,    // automatically start slideshow
        defaultDuration: 5,    // default duration in seconds if no audio is available 
        defaultAudios: false,    // try to play audios with names such as audio/1.2.ogg
        playerOpacity: 0.05,    // opacity value of audio player if unfocused
        playerStyle: 'position: fixed; bottom: 4px; left: 25%; width: 50%; height:75px; z-index: 33;', // style used for container of audio controls 
        startAtFragment: false, // when moving to a slide, start at the current fragment or at the start of the slide
},
