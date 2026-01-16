import os
from playwright.sync_api import sync_playwright

# Création dossier screenshots
os.makedirs("screenshots", exist_ok=True)

def test_todo_step_by_step_with_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Step 1: Ouvrir l'application
        page.goto("http://localhost:3000")
        page.screenshot(path="screenshots/step1_open_app.png")
        print("Step 1: Open app - done")

        # Step 2: Ajouter une tâche
        page.fill("input[name='text']", "automation test")
        page.click("button[role='button']")
        task = page.locator("li", has_text="automation test")
        assert task.is_visible()
        page.screenshot(path="screenshots/step2_add_task.png")
        print("Step 2: Add task - done")

        # Step 3: Valider la tâche
        task.click()
        assert "done" in task.get_attribute("class")
        page.screenshot(path="screenshots/step3_validate_task.png")
        print("Step 3: Validate task - done")

        # Step 4: Supprimer la tâche
        delete_btn = task.locator("..").locator("span.trash")
        delete_btn.click()
        assert page.locator("li", has_text="automation test").count() == 0
        page.screenshot(path="screenshots/step4_delete_task.png")
        print("Step 4: Delete task - done")

        browser.close()
