class Planet:
    def __init__(self, name, planet_type, star):
        if not all(
            isinstance(value, str)
            for value in (name, planet_type, star)
        ):
            raise TypeError(
                'name, planet type, and star must be strings'
            )

        if not name or not planet_type or not star:
            raise ValueError(
                'name, planet_type, and star must be non-empty strings'
            )

        self.name = name
        self.planet_type = planet_type
        self.star = star

    def orbit(self):
        return f'{self.name} is orbiting around {self.star}...'

    def __str__(self):
        return (
            f'Planet: {self.name} | '
            f'Type: {self.planet_type} | '
            f'Star: {self.star}'
        )


planet_1 = Planet('Earth', 'Terrestrial', 'Sun')
planet_2 = Planet('Jupiter', 'Gas Giant', 'Sun')
planet_3 = Planet('Kepler-186f', 'Terrestrial', 'Kepler-186')

print(planet_1)
print(planet_2)
print(planet_3)

print(planet_1.orbit())
print(planet_2.orbit())
print(planet_3.orbit())