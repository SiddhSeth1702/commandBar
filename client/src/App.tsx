import "./App.css";
import { useEffect } from "react";
import { init } from "commandbar";

function App() {
  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.data.tasks;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };
  const getFaqs = async () => {
    try {
      const response = await fetch("http://localhost:3001/faqs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.data.faqs;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };
  const getGlossary = async () => {
    try {
      const response = await fetch("http://localhost:3001/glossary", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.data.glossary;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  };

  useEffect(() => {
    init("0f3bdb73");
    const loggedInUserId = "12345";
    window.CommandBar.boot(loggedInUserId, {
      spotlight: {
        showNavigation: false,
        showActions: false,
        placeholderText: "Search for tasks...",
      },
    });

    (async () => {
      const fetchedTasks = await getTasks();
      const fetchedFaqs = await getFaqs();
      const fetchedGlossary = await getGlossary();

      window.CommandBar.addRecords("tasks", fetchedTasks, {
        labelKey: "title",
        recordOptions: {
          url: "/{{record.name}}",
        },
      });
      window.CommandBar.addRecords("faqs", fetchedFaqs, {
        labelKey: "question",
        recordOptions: {
          url: "/{{record.name}}",
        },
      });
      window.CommandBar.addRecords("Terms", fetchedGlossary, {
        labelKey: "term",
        recordOptions: {
          url: "/{{record.name}}",
        },
      });
    })();
    const resultElement = document.querySelector(
      "#search-result"
    ) as HTMLElement;

    window.CommandBar.setFormFactor({
      type: "inline",
      rootElement: resultElement,
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="search">
          <div className="search-results" id="search-result"></div>
        </div>
      </div>
    </>
  );
}

export default App;
