let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let noteList;

if (window.location.pathname === '/notes') {
	noteTitle = document.querySelector('.note-title');
	noteText = document.querySelector('.note-textarea');
	saveNoteBtn = document.querySelector('.save-note');
	newNoteBtn = document.querySelector('.new-note');
	noteList = document.getElementById('list-group');
	hide(saveNoteBtn);
}

// Show an element using a standard block/inline-block style
const show = (elem) => {
	elem.style.display = 'inline-block';
};

// Hide an element
const hide = (elem) => {
	elem.style.display = 'none';
};

// activeNote is used to keep track of the note in the textarea
let activeNote = {};

const getNotes = () =>
	fetch('/api/notes', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

const saveNote = (note) =>
	fetch('/api/notes', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(note),
	});

const deleteNote = (id) =>
	fetch(`/api/notes/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});

const renderActiveNote = () => {
	hide(saveNoteBtn);

	if (activeNote.id) {
		noteTitle.setAttribute('readonly', true);
		noteText.setAttribute('readonly', true);
		noteTitle.value = activeNote.title;
		noteText.value = activeNote.text;
	} else {
		noteTitle.removeAttribute('readonly');
		noteText.removeAttribute('readonly');
		noteTitle.value = '';
		noteText.value = '';
	}
};

const handleNoteSave = () => {
	const newNote = {
		title: noteTitle.value,
		text: noteText.value,
	};
	saveNote(newNote).then(() => {
		getAndRenderNotes();
		renderActiveNote();
	});
};

// Delete the clicked note
const handleNoteDelete = (e) => {
	// Prevents the click listener for the list from being called when the button inside of it is clicked
	e.stopPropagation();

	const note = e.target;
	const noteId = JSON.parse(note.parentElement.dataset.note).id;

	if (activeNote.id === noteId) {
		activeNote = {};
	}

	deleteNote(noteId).then(() => {
		getAndRenderNotes();
		renderActiveNote();
	});
};

// Sets the activeNote and displays it
const handleNoteView = (e) => {
	e.preventDefault();
	activeNote = JSON.parse(e.target.parentElement.dataset.note);
	renderActiveNote();
};

// Sets the activeNote to and empty object and allows the user to enter a new note
const handleNewNoteView = (e) => {
	activeNote = {};
	renderActiveNote();
};

// Drag and drop handlers
let draggedNote = null;

const handleDragStart = (e) => {
	draggedNote = e.currentTarget;
	e.dataTransfer.effectAllowed = 'move';
	e.target.classList.add('dragging');
};

const handleDragOver = (e) => {
	e.preventDefault();
	e.dataTransfer.dropEffect = 'move';
	const afterElement = getDragAfterElement(noteList, e.clientY);
	if (afterElement == null) {
		noteList.appendChild(draggedNote);
	} else {
		noteList.insertBefore(draggedNote, afterElement);
	}
};

const handleDragEnd = (e) => {
	e.target.classList.remove('dragging');
};

const getDragAfterElement = (container, y) => {
	const draggableElements = [
		...container.querySelectorAll('li:not(.dragging)'),
	];

	return draggableElements.reduce(
		(closest, child) => {
			const box = child.getBoundingClientRect();
			const offset = y - box.top - box.height / 2;

			if (offset < 0 && offset > closest.offset) {
				return { offset: offset, element: child };
			} else {
				return closest;
			}
		},
		{ offset: Number.NEGATIVE_INFINITY }
	).element;
};

const handleRenderSaveBtn = () => {
	if (!noteTitle.value.trim() || !noteText.value.trim()) {
		hide(saveNoteBtn);
	} else {
		show(saveNoteBtn);
	}
};

// Render the list of note titles
const renderNoteList = async (notes) => {
	let jsonNotes = await notes.json();
	if (window.location.pathname === '/notes') {
		noteList.innerHTML = '';
	}

	let noteListItems = [];

	// Returns HTML element with or without a delete button
	const createLi = (text, delBtn = true) => {
		const liEl = document.createElement('li');
		liEl.classList.add('list-group-item');

		if (delBtn) {
			liEl.setAttribute('draggable', true);
			liEl.addEventListener('dragstart', handleDragStart);
			liEl.addEventListener('dragover', handleDragOver);
			liEl.addEventListener('dragend', handleDragEnd);
		}

		const spanEl = document.createElement('span');
		spanEl.classList.add('list-item-title');
		spanEl.innerText = text;
		spanEl.addEventListener('click', handleNoteView);

		liEl.append(spanEl);

		if (delBtn) {
			const delBtnEl = document.createElement('i');
			delBtnEl.classList.add(
				'fas',
				'fa-times',
				'delete-note'
			);
			delBtnEl.addEventListener('click', handleNoteDelete);

			liEl.append(delBtnEl);
		}

		return liEl;
	};

	if (jsonNotes.length === 0) {
		noteListItems.push(createLi('No saved Notes', false));
	}

	jsonNotes.forEach((note) => {
		const li = createLi(note.title);
		li.dataset.note = JSON.stringify(note);

		noteListItems.push(li);
	});

	if (window.location.pathname === '/notes') {
		noteListItems.forEach((note) => noteList.append(note));
	}
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => getNotes().then(renderNoteList);

if (window.location.pathname === '/notes') {
	saveNoteBtn.addEventListener('click', handleNoteSave);
	newNoteBtn.addEventListener('click', handleNewNoteView);
	noteTitle.addEventListener('keyup', handleRenderSaveBtn);
	noteText.addEventListener('keyup', handleRenderSaveBtn);

	const clearBtn = document.querySelector('.clear-btn');
	clearBtn.addEventListener('click', () => {
		noteTitle.value = '';
		noteText.value = '';
		hide(saveNoteBtn);
	});

	const themeBtn = document.getElementById('theme-toggle');
	if (themeBtn) {
		themeBtn.addEventListener('click', () => {
			document.body.classList.toggle('dark-theme');
			const icon = themeBtn.querySelector('i');
			icon.classList.toggle('fa-moon');
			icon.classList.toggle('fa-sun');
			
			// Save preference (Sanitization of user settings)
			localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
		});

		// Load saved preference
		if (localStorage.getItem('theme') === 'dark') {
			document.body.classList.add('dark-theme');
			themeBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
		}
	}
}

getAndRenderNotes();
