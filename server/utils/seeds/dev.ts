import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('faq').del();
    await knex('glossary').del();
    await knex('users').del();
    await knex('tasks').del();

    // Inserts seed entries
    await knex('faq').insert([
        { id: 1, question: 'How do I reset my password?', answer: 'To reset your password, go to the settings page and click on "Reset Password". Follow the instructions sent to your email.' },
        { id: 2, question: 'Where can I find the user guide?', answer: 'The user guide is available under the "Help" section on the main menu.' },
        { id: 3, question: 'How do I contact support?', answer: 'You can contact support by clicking on the "Support" tab in the main menu and filling out the contact form.' },
        { id: 4, question: 'What is the refund policy?', answer: 'Our refund policy can be found on the "Refund Policy" page accessible from the footer of the website.' }
    ]);

    await knex('users').insert([
        { username: 'john_doe', email: 'john.doe@example.com' },
        { username: 'jane_smith', email: 'jane.smith@example.com' },
        { username: 'alice_jones', email: 'alice.jones@example.com' }
    ]);

    await knex('tasks').insert([
        { title: 'Complete project report', description: 'Finalize and submit the project report by the end of the week.', user_id: 1 },
        { title: 'Prepare presentation slides', description: 'Create and review presentation slides for the upcoming meeting.', user_id: 2 },
        { title: 'Organize team meeting', description: 'Schedule and organize a meeting with the development team.', user_id: 1 },
        { title: 'Update website content', description: 'Review and update the content on the company website.', user_id: 3 }
    ]);

    await knex('glossary').insert([
        { term: 'API', definition: 'Application Programming Interface, a set of rules and tools for building software applications.' },
        { term: 'SQL', definition: 'Structured Query Language, used for managing and manipulating relational databases.' },
        { term: 'ORM', definition: 'Object-Relational Mapping, a programming technique for converting data between incompatible type systems in object-oriented programming languages.' },
        { term: 'CRUD', definition: 'Create, Read, Update, Delete - the four basic operations for managing data in a database.' }
    ]);
}
