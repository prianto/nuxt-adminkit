<template>
  <main class="d-flex w-100">
    <div class="container d-flex flex-column">
      <div class="row vh-100">
        <div class="col-sm-8 col-md-6 col-lg-4 mx-auto d-table h-100">
          <div class="d-table-cell align-middle">
            <div class="text-center mt-4">
              <h1 class="h2">Welcome back, User</h1>
              <p class="lead">Please sign in to continue</p>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="m-sm-4">
                  <div class="text-center"></div>
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Email</label>
                      <input
                        class="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Password</label>
                      <input
                        class="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <label class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="remember-me"
                          name="remember-me"
                          checked
                        />
                        <span class="form-check-label">
                          Remember me next time
                        </span>
                      </label>
                    </div>
                    <div class="text-center mt-3">
                      <button type="submit" class="btn btn-lg btn-primary">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'minimal',
}
</script>
