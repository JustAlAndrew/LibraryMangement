// Sample Members Data
const members = [
    { memberId: 'M001', name: 'Juan Dela Cruz', email: 'juan@example.com', phone: '09123456789', type: 'Student' },
    { memberId: 'M002', name: 'Maria Santos', email: 'maria@example.com', phone: '09987654321', type: 'Staff' },
];

// Function to Display Members
function loadMembers() {
    const tbody = document.getElementById('membersTableBody');
    tbody.innerHTML = '';

    members.forEach((member, index) => {
        const row = `<tr>
            <td>${member.memberId}</td>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.phone}</td>
            <td>${member.type}</td>
            <td>
                <button onclick="editMember(${index})">Edit</button>
                <button onclick="deleteMember(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Add/Edit Member Modal
const modal = document.getElementById('memberModal');
const form = document.getElementById('memberForm');
let editingIndex = null;

document.getElementById('addMemberBtn').addEventListener('click', () => {
    editingIndex = null;
    form.reset();
    modal.style.display = 'flex';
    document.getElementById('modalTitle').textContent = 'Add Member';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const member = {
        memberId: document.getElementById('memberId').value,
        name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        type: document.getElementById('memberType').value,
    };

    if (editingIndex === null) {
        members.push(member);
    } else {
        members[editingIndex] = member;
    }
    closeModal();
    loadMembers();
});

function editMember(index) {
    editingIndex = index;
    const member = members[index];
    modal.style.display = 'flex';
    document.getElementById('modalTitle').textContent = 'Edit Member';
    document.getElementById('memberId').value = member.memberId;
    document.getElementById('firstName').value = member.name.split(' ')[0];
    document.getElementById('lastName').value = member.name.split(' ')[1];
    document.getElementById('email').value = member.email;
    document.getElementById('phone').value = member.phone;
    document.getElementById('memberType').value = member.type;
}

function deleteMember(index) {
    members.splice(index, 1);
    loadMembers();
}

function closeModal() {
    modal.style.display = 'none';
}

// Initial Load
loadMembers();
