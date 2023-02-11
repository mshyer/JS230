document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer = document.querySelector('#controls');
  const buttons = buttonContainer.querySelectorAll('button');

  const execCBFuncs = {
    bold(e) {
      e.preventDefault();
      document.execCommand('bold');
    },
    italicize(e) {
      e.preventDefault();
      document.execCommand('italic');
    },
    underline(e) {
      e.preventDefault();
      document.execCommand('underline');
    },
    strikethrough(e) {
      e.preventDefault();
      document.execCommand('strikethrough');
    },
    link(e) {
      e.preventDefault();
      let href = prompt('please enter a URL');
      if (href) {
        document.execCommand('createLink', false, 'https://www.wikipedia.org');
      }
    },

    ul(e) {
      e.preventDefault();
      document.execCommand('insertUnorderedList');
    },
    ol(e) {
      e.preventDefault();
      document.execCommand('insertOrderedList');
    },
    al_left(e) {
      e.preventDefault();
      document.execCommand('justifyLeft');
    },
    al_right(e) {
      e.preventDefault();
      document.execCommand('justifyRight');
    },
    al_center(e) {
      e.preventDefault();
      document.execCommand('justifyCenter');
    },
    al_justify(e) {
      e.preventDefault();
      document.execCommand('justifyFull');
    },
  };

  const buttonMatch = {
    bold: document.querySelector('button.bold'),
    italic: document.querySelector('button.italicize'),
    underline: document.querySelector('button.underline'),
    strikethrough: document.querySelector('button.strikethrough'),
    createLink: document.querySelector('button.link'),
    justifyLeft: document.querySelector('button.al_left'),
    justifyRight: document.querySelector('button.al_right'),
    justifyCenter: document.querySelector('button.al_center'),
    justifyFull: document.querySelector('button.al_justify'),
    insertOrderedList: document.querySelector('button.ol'),
    insertUnorderedList: document.querySelector('button.ul'),

  };

  const WYSIWYG = {
    init() {
      this.initButtons();
      this.initQueryButtonStateListener();
    },

    initButtons() {
      for (const button of buttons) {
        let cbFunc = execCBFuncs[button.classList[0]];
        document.getElementById('user_text').focus();
        button.addEventListener('click', cbFunc.bind(this));
      }
    },

    toggleButtons(commands) {
      buttons.forEach(button => {
        button.classList.remove('highlight');
      });
      commands.forEach(command => {
        buttonMatch[command].classList.add('highlight');
      });
    },

    initQueryButtonStateListener() {
      const commands = [
        'bold', 'italic', 'underline', 'strikethrough', 'createLink',
        'justifyLeft', 'justifyRight', 'justifyCenter', 'justifyFull',
        'insertOrderedList', 'insertUnorderedList'
      ];
      //
      //document.getElementById('user_text').addEventListener('click', (e) => {
      document.addEventListener('selectionchange', () => {
        //e.preventDefault();
        let selectedCommands = [];
        commands.forEach(command => {
          if (document.queryCommandState(command)) {
            selectedCommands.push(command);
            WYSIWYG.toggleButtons(selectedCommands);
          }
        });

      });
    },
  };

  WYSIWYG.init();

});
