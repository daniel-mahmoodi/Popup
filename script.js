    // chera az querySelectorAll estefade shode ast

    const openModalButtons = document.querySelectorAll('[data-modal-target]')

    // chera az querySelectorAll estefade shode ast
    const closeModalButtons = document.querySelectorAll('[data-close-button]')

    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // baraye dastersi be id modal (#modal) bayad az button.dataset.modalTarget estefade shawad
            // modalTarget shiveye newshtari ast baraye inke ma be #modal dastresi peyda konim
            const modal = document.querySelector(button.dataset.modalTarget)
            openModal(modal)
        })
    })

    overlay.addEventListener('click', () => {
        // chera az querySelectorAll estefade shode ast
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModal(modal)
        })
    })

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // closest: avalin parenti k shamele class modal ast ra farakhani mikond
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
    }

    function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
    }