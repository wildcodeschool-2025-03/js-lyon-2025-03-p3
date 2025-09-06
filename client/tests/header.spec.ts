import { expect, test } from "@playwright/test";

test("Navigation depuis le header vers Notre flotte", async ({ page }) => {
  // 1. Aller sur la page d'accueil
  await page.goto("http://localhost:3000");

  // 2. Cibler l'élément du header (ajustez le sélecteur)
  const headerLink = page.locator('.header a[href="/ships"]'); // Exemple pour un lien Notre flotte

  // 3. Cliquer sur l'élément et attendre la navigation
  await headerLink.click();

  // 4. Vérifier que l'URL après clic est correcte
  await expect(page).toHaveURL("http://localhost:3000/ships"); // Ajustez l'URL attendue
});
