class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({
            "amount": amount,
            "description": description
        })

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False

        self.ledger.append({
            "amount": -amount,
            "description": description
        })
        return True
    def check_funds(self, amount):
        if amount > self.get_balance():
            return False
        return True

    def get_balance(self):
        balance = 0

        for transaction in self.ledger:
            balance += transaction["amount"]

        return balance

    def transfer(self, amount, category):
        if not self.check_funds(amount):
            return False

        self.withdraw(amount, f"Transfer to {category.name}")
        category.deposit(amount, f"Transfer from {self.name}")

        return True

    def __str__(self):
        title = self.name.center(30, "*")
        result = title + "\n"

        for transaction in self.ledger:
            description = transaction["description"][:23]
            amount = transaction["amount"]

            result += f"{description:<23}{amount:>7.2f}\n"

        result += f"Total: {self.get_balance():.2f}"

        return result
    

def create_spend_chart(categories):
    chart = "Percentage spent by category\n"

    spending = []

    for category in categories:
        total = 0

        for transaction in category.ledger:
            if transaction["amount"] < 0:
                total += abs(transaction["amount"])

        spending.append(total)

    total_spending = sum(spending)

    percentages = []

    for amount in spending:
        if total_spending > 0:
            percentage = int((amount / total_spending) * 100)
        else:
            percentage = 0

        percentages.append((percentage // 10) * 10)

    for level in range(100, -1, -10):
        chart += f"{level:3}|"

        for percentage in percentages:
            if percentage >= level:
                chart += " o "
            else:
                chart += "   "

        chart += " \n"
    chart += "    " + "-" * (len(categories) * 3 + 1) + "\n"

    max_length = max(len(category.name) for category in categories)

    for i in range(max_length):
        chart += "    "

        for category in categories:
            if i < len(category.name):
                chart += f" {category.name[i]} "
            else:
                chart += "   "

        chart += " \n"
    return chart.rstrip("\n")