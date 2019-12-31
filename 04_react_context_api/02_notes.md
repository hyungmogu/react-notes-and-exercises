# Lesson 02 - How Context Works

# Context API
- provides a way to pass data through components without having to define props manually at each level
- has three parts
    1. React.createContext()
        - sets up a context
        - returns Provider and Consumer
    2. Provider()
        - used high as possible in a component tree
        - allows consumer to subscribe to context changes

    3. Consumer()
        - accesses provider to get the data it needs
        - prevents **prop drilling**


- Context works by letting Provider and Consumer to communicate to each other

